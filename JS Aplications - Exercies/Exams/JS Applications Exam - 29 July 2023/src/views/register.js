import { register } from "../api/user.js";
import { html } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const registerTemplate = (onRegister) => html` <section id="register">
  <div class="form">
    <h2>Register</h2>
    <form class="register-form" @submit=${onRegister}>
      <input type="text" name="email" id="register-email" placeholder="email" />
      <input
        type="password"
        name="password"
        id="register-password"
        placeholder="password"
      />
      <input
        type="password"
        name="re-password"
        id="repeat-password"
        placeholder="repeat password"
      />
      <button type="submit">register</button>
      <p class="message">Already registered? <a href="/login">Login</a></p>
    </form>
  </div>
</section>`;

export function registerView(ctx) {
  ctx.render(registerTemplate(createSubmitHandler(onRegister)));

  async function onRegister(data) {
    const { email, password, "re-password": rePass } = data;
    if((email == '' || password == "" || rePass == '') || (password !== rePass)) {
      return alert("All fields required!");
    }

    // if (password !== rePass) {
    //   return
    // }
    
    // if (email == "" || password == "") {
    //   alert("All fields required!");
    // }
    
    await register(email, password);
    ctx.page.redirect("/");
  }
}
