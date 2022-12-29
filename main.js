function startclassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier('https://storage.googleapis.com/tm-model/9d_XEGn-m/model.json',modelReady);

}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.log(error);
    }else{
        console.log(results);
        random_number_r= Math.floor(Math.random()*255)+1; 
        random_number_g= Math.floor(Math.random()*255)+1; 
        random_number_b= Math.floor(Math.random()*255)+1;
        
        document.getElementById("result_label").innerHTML='Escucho: '+results[0].label;
        document.getElementById("result_confidence").innerHTML='Precision: '+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";


        img=document.getElementById('monstruo1')
        img2=document.getElementById('monstruo2')
        img3=document.getElementById('monstruo3')
        img4=document.getElementById('monstruo4')

        if (results[0].label=="xd"){
            img.src='Diddjahear.gif'
            img2.src='Nixie.png'
            img3.src='rocky.png'
            img4.src='LEI.png'
        }        else if (results[0].label=="Nixie"){
            img.src='Diddjahear.png'
            img2.src='Nixie.gif'
            img3.src='rocky.png'
            img4.src='LEI.png'
        }        else if (results[0].label=="lalala"){
            img.src='Diddjahear.png'
            img2.src='Nixie.png'
            img3.src='rocky.png'
            img4.src='LEI.gif'
        }        else {
            img.src='Diddjahear.png'
            img2.src='Nixie.png'
            img3.src='rocky.gif'
            img4.src='LEI.png'
        }
        
        
    }

}








