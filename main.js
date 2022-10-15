function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true });
    classsifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/wxQj1aYfI/model.json', modelReady);
}
function modelReady(){
    classsifier.classify(gotResults);
}
function gotResults(error, results) (
    if(error) {
        console.error(error);
    }
    else{
        console.log(results);
    }
)