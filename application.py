from flask import Flask, flash, redirect, render_template, request, session
from flask_session import Session
from tempfile import mkdtemp
from cs50 import SQL
from werkzeug.security import check_password_hash, generate_password_hash
from helpers import login_required
from flask_socketio import SocketIO, emit, join_room, leave_room
app = Flask(__name__)
# Configure session to use filesystem
app.config["SESSION_FILE_DIR"] = mkdtemp()
app.config["SESSION_TYPE"] = "filesystem"
Session(app)
db = SQL("sqlite:///basedato.db")
# Instancia de SocketIo
socketio = SocketIO(app, cors_allowed_origins='*')


@app.route("/")
@login_required
def index():

    return render_template('index.html')


@app.route("/prueba")
def prueba():

    return render_template('index2.html')


@app.route("/prueba2")
def prueba2():

    return render_template('inicio.html')


@app.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        usuario = request.form.get('usuario')
        contraseña = request.form.get('contraseña')
        confirmacion = request.form.get('confirmacion')
        # print(usuario, contraseña, confirmacion)
        if not usuario:
            flash("Rellena el campo 'Usuario'")
            return render_template('register.html')
        if not contraseña:
            flash("Rellena el campo 'Contraseña'")
            return render_template('register.html')
        if not confirmacion:
            flash("Rellena el campo 'Confirmar Contraseña'")
            return render_template('register.html')
        if contraseña != confirmacion:
            flash("Rellena el campo 'La contraseña no es la misma")
            return render_template('register.html')
        userID = db.execute(
            "SELECT * FROM users WHERE user = :usuario", usuario=usuario)
        if len(userID) == 1:
            flash("El nombre de usuario que usted ingreso ya existe")
            return render_template('register.html')
        hash = generate_password_hash(contraseña)
        print(hash)
        insert = db.execute(
            "INSERT INTO users (user, password) VALUES (:usuario,:hash)", usuario=usuario, hash=hash)
        flash("USUARIO REGISTRADO!!!")
        IdUser = db.execute(
            "SELECT id FROM users WHERE user = :usuario", usuario=usuario)
        session["user_id"] = IdUser[0]["id"]
        return redirect("/")
    return render_template('register.html')


@app.route("/login", methods=["GET", "POST"])
def login():
    session.clear()
    if request.method == "POST":
        usuario = request.form.get('usuario')
        contraseña = request.form.get('contraseña')
        # print(usuario, contraseña, confirmacion)
        if not usuario:
            flash("Rellena el campo 'Usuario'")
            return render_template('login.html')
        if not contraseña:
            flash("Rellena el campo 'Contraseña'")
            return render_template('login.html')
        row = db.execute(
            "SELECT * FROM users WHERE user = :usuario", usuario=usuario)
        if len(row) != 1 or not check_password_hash(row[0]["password"], contraseña):
            flash("El usuario o la contraseña son invalidos")
            return render_template('login.html')
        session["user_id"] = row[0]["id"]
        flash("Inicio sesion correctamente")
        return redirect("/")
    return render_template('login.html')


@app.route("/logout")
def logout():
    session.clear()
    return redirect("/")


@app.route('/chat', methods=["GET", "POST"])
@login_required
def chat():

    us = db.execute(
        "SELECT * FROM users WHERE id = :id", id=session["user_id"])

    username = us[0]['user']

    return render_template("chat.html", username=username)


@ socketio.on('saludar')
def saludar(mensaje, user, fecha):

    print("fecha: ", fecha)

    data = {"message": mensaje, "username": user, "fecha": fecha}
    # Emitir a todos con el argumento broadcast
    emit('general', data,
         broadcast=True, include_self=False)

    # Enviar respuesta de evento emit al cliente
    return (f'{mensaje}')


@app.route("/sitio/<id>", methods=["GET", "POST"])
@login_required
def sitio(id):

    iduser = session["user_id"]
    print("iduser: ", iduser)
    sitio = db.execute("SELECT * FROM sitios WHERE id=:id", id=id)
    print(sitio)
    return render_template("sitios.html", sitio=sitio, id=id)
