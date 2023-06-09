/** 
	* generate html for logIn window
 *
 * @returns to renderLogInWindow()
 */
function returnLogInHtml() {
 return /*html*/ `
	<form onsubmit="logIn(); return false;" class="activityContainer">
		<h1>Log In</h1>
		<div class="blueLine"></div>
		<div class="inputContainer">
			<input type="email" id="email" placeholder="Email" class="inputField" required><img src="./img/letter.svg" alt="">
		</div>
		<div class="inputContainer">
			<input type="password" id="passwordField" placeholder="Password" class="inputField" required><div id="passwordImg" onclick="showPassword()"></div>
		</div>
		<div class="rememberContainer">
			<div class="checkContainer">
				<input type="checkbox" onchange="toggleAutocomplete()" name="remember" id="remember"><p>Remember me</p>
			</div>    
			<a href="#" class="link" onclick="renderForgotPassword()">Forgot my password</a>
		</div>
		<div class="twiceBtnContainer">
			<button class="focusBtn" type="submit">Log in</button>
			<a href="#" class="outFocusBtn guestA" onclick="indexToSummary()"><p>Guest Log in</p></a>
		</div>
	</form>
	`;
}

/**
	* generate html for sign up 
	*
	* @returns to renderSignUpWindow()
	*/
function returnSignUpHtml() {
	return /*html*/ `
		<form onsubmit="createNewAccount(); return false;" class="activityContainer">
			<img src="./img/backArrow.svg" class="backArrow" onclick="renderLogInWindow()" alt="">
			<h1>Sign Up</h1>
			<div class="blueLine"></div>
			<div class="inputContainer">
				<input type="text" id="name" placeholder="Name" class="inputField" required><img src="./img/person.svg" alt="">
			</div>
			<div class="inputContainer">
				<input type="email" id="email" placeholder="Email" class="inputField" required><img src="./img/letter.svg" alt="" >
			</div>
			<div class="inputContainer requiredMessageContainer">
				<input type="password" id="passwordField" placeholder="Password" class="inputField" minlength="8" required><div id="passwordImg" onclick="showPassword()"></div>
				<span id="requiredMessage" style="opacity: 0">This user has already an account.</span>
			</div>
			<div class="twiceBtnContainer">
				<button class="focusBtn" type="submit">Sign up</button>

			</div>
	</form>	
	`;
}

/** 
	* generate forgot Passwort Content
	*
	* @returns to renderForgotPassword()
	*/
function returnForgotPasswordHtml() {
		return /*html*/`
		<div class="slideLogo">
   <img src="./img/join-logo.svg" alt="logo" />
  </div>
		<div class="slideForm">
			<form onsubmit="resetPassword(); return false;" class="activityContainer">
				<img src="./img/backArrow.svg" class="backArrow" onclick="renderLogInWindow()" alt="">
				<h1>I forgot my password</h1>
				<div class="blueLine"></div>
				<p class="activityText">
					Don't worry! We will send you an email with the instructions to reset your password.
				</p>
				<div class="inputContainer requiredMessageContainer">
					<input type="email" id="email" placeholder="Email" class="inputField" required><img src="./img/letter.svg" alt="">
					<span id="requiredMessage" style="opacity: 0">
						This User wasn't found.</span>
				</div>
				<div class="twiceBtnContainer">
					<button class="focusBtn" type="submit">Send me the email</button>
				</div>
			</form>	
		</div>
		`
};

/**
	* generate html for header buttons
	* 
	* @returns to renderLogInHeaderButtons()
	*/
function returnHeaderBtnHtml() {
		return /*html*/`
			<button class="justTextBtn">Not a Join user?</button>
			<button class="focusBtn" onclick="renderSignUpWindow()">Sign up</button>
		`
}

/**
	* generate reset Passwort Content

	* @returns to renderResetPassword()
	*/
function returnResetPasswordHtml() {
	return /*html*/`
		<form onsubmit="createNewPassword(); return false;" class="activityContainer">
			<img src="./img/backArrow.svg" class="backArrow" onclick="renderLogInWindow()" alt="">
			<h1>Reset your password</h1>
			<div class="blueLine"></div>
			<p class="activityText">
				Change your account password.
			</p>
			<div class="inputContainer">
				<input type="text" id="passwordField" autocomplete="new-password" placeholder="Password" class="inputField" minlength="8" required>
			</div>
			<div class="inputContainer requiredMessageContainer">
				<input type="text" id="confirmPassword" placeholder="Confirm password" class="inputField" required>
				<span id="requiredMessage" style="opacity: 0">Make sure the second password you typed matches the first.</span>
			</div>
			<div class="twiceBtnContainer">
				<button class="focusBtn">Continue</button>
			</div>
	</form>	
		`
}

/** 
	* @returns to newPasswordOk() 
	*/
function returnIdentPasswordHtml() {
	return /*html*/`
		<div class="messageBtnBackground">
			<button class="focusBtn messageBtn">You reset your password</button>
		</div>
		`
}



/**  
	* generate an email is send content
	*
	* @returns to resetPassword()
	*/
function returnSendEmailHtml() {
	return /*html*/`
		<div class="messageBtnBackground">
			<button class="focusBtn messageBtn"><img src="./img/sendOk.svg" alt=""> An E-Mail has been sent to you.</button>
		</div>
		`
}