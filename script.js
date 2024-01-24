let model;

async function loadModel() {
    // Load the TensorFlow.js model
    model = await tf.loadLayersModel('tfjs_model/model.json');
    console.log('Model loaded');
}

async function predict(event) {
    event.preventDefault();  // Prevent the default form submission

    var article = document.getElementById('article').value;

    if (article.trim() === "") {
        alert("Please enter a news article.");
        return;
    }

    // Tokenize and preprocess the input data
    const sequence = tokenizer.texts_to_sequences([article]);
    const paddedSequence = padSequences(sequence, maxlen);
    const input = tf.tensor2d(paddedSequence, [1, maxlen]);

    // Make predictions using the loaded TensorFlow.js model
    const prediction = model.predict(input);

    // Assuming your model outputs a probability, you might want to threshold it
    const threshold = 0.5;
    const result = prediction.dataSync()[0] > threshold ? "Fake" : "Not Fake";

    document.getElementById('result').innerText = 'Prediction: ' + result;
}

function padSequences(sequences, maxlen) {
    return sequences.map(seq => {
        if (seq.length > maxlen) {
            seq.splice(0, seq.length - maxlen);
        } else {
            while (seq.length < maxlen) {
                seq.unshift(0);
            }
        }
        return seq;
    });
}

// Load the model when the page is loaded
loadModel();
