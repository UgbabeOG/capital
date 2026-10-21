const fields = ["userEmail","userPass","profilePic","balance","sendTo","restrictedMsg","welcomeMsg","userName"];
const form = document.getElementById("adminForm");
// load
fields.forEach(f => {
  const v = localStorage.getItem(f);
  if (v !== null) document.getElementById(f).value = v;
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fields.forEach(f => localStorage.setItem(f, document.getElementById(f).value));
  alert("Saved");
});
