function indie(){
    navigator.mediaDevices.getUserMedia({audio:true})
    AI=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/zI2YYWpao/model.json", listo)
}
function listo(){
    console.log("+dcf")
    AI.classify(respuesta)
}
function respuesta(error, resultados){
    if (error){
        console.log(error)
    }
    else{
        console.log(resultados)
        sonido=resultados[0].label
        confianz=Math.round(resultados[0].confidence*100)
        document.getElementById("pqowieuryt").innerHTML="yo puedo escuchar: "+sonido
        document.getElementById("qpwoeiruty").innerHTML="con "+confianz+"% de confianza"
        switch (sonido) {
            case "5155818548182":
                document.getElementById("qetuo").src="tortuga.png"
                document.getElementById("power").src="pulpo.gif"
                document.getElementById("piyrw").src="cangrejo.png"
                document.getElementById("poiuytrewq").src="mariposa.png"
                document.getElementById("qwertyuiop").src="abeja.png"
                break;
            case "Ruido de fondo":
                document.getElementById("qwertyuiop").src="abeja.gif"
                document.getElementById("piyrw").src="cangrejo.png"
                document.getElementById("poiuytrewq").src="mariposa.png"
                document.getElementById("qetuo").src="tortuga.png"
                document.getElementById("power").src="pulpo.png"
                break;
            case "S":
                document.getElementById("poiuytrewq").src="mariposa.gif"
                document.getElementById("qwertyuiop").src="abeja.png"
                document.getElementById("power").src="pulpo.png"
                document.getElementById("qetuo").src="tortuga.png"
                document.getElementById("piyrw").src="cangrejo.png"
                break;
            case "M":
                document.getElementById("qetuo").src="tortuga.gif"
                document.getElementById("poiuytrewq").src="mariposa.png"
                document.getElementById("qwertyuiop").src="abeja.png"
                document.getElementById("power").src="pulpo.png"
                document.getElementById("piyrw").src="cangrejo.png"
                break;
            case "h":
                document.getElementById("piyrw").src="cangrejo.gif"
                document.getElementById("qwertyuiop").src="abeja.png"
                document.getElementById("poiuytrewq").src="mariposa.png"
                document.getElementById("qetuo").src="tortuga.png"
                document.getElementById("power").src="pulpo.png"
                break;
            case "D":
                document.getElementById("qetuo").src="tortuga.gif"
                document.getElementById("qwertyuiop").src="abeja.gif"
                document.getElementById("poiuytrewq").src="mariposa.gif"
                document.getElementById("power").src="pulpo.gif"
                document.getElementById("piyrw").src="cangrejo.gif"
                break;
        }
    }
}