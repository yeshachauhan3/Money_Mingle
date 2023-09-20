const firebaseConfig = {
    apiKey: "AIzaSyAGEirx407USE28wDc-Wav-F2b3h2taqtw",
    authDomain: "moneymingletest.firebaseapp.com",
    databaseURL: "https://moneymingletest-default-rtdb.firebaseio.com",
    projectId: "moneymingletest",
    storageBucket: "moneymingletest.appspot.com",
    messagingSenderId: "847261677674",
    appId: "1:847261677674:web:0fba00d2ff5d2ad8c77213",
    measurementId: "G-1W3D700JVD"
  };

  firebase.initializeApp(firebaseConfig);

  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var amount = getInputVal('amount');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    // var date = getInputVal('date');
    var timestamp = firebase.database.ServerValue.TIMESTAMP;
    // Save message
    saveMessage(name, amount, email, phone, timestamp);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, amount, email, phone, timestamp){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      amount:amount,
      email:email,
      phone:phone,
      timestamp:timestamp
    });
  }