function submitForm(toastMessage, nameId, companyId, emailId, experienceId, positionId, phoneId, subjectId, messageId, closeHireNowForm) {
  var username = document.getElementById(nameId)?.value || 'Dummy';
  var company = document.getElementById(companyId)?.value || 'Dummy';
  var email = document.getElementById(emailId)?.value || 'Dummy';
  var experience = document.getElementById(experienceId)?.value || 'Dummy';
  var position = document.getElementById(positionId)?.value || 'Dummy';
  var phone_number = document.getElementById(phoneId)?.value || '+923001234567'
  var subject = document.getElementById(subjectId)?.value || 'abc subject'
  var message = document.getElementById(messageId)?.value || 'abc message'
  fetch(
    "https://nd8p01s7f7.execute-api.ap-south-1.amazonaws.com/savehiringinfo",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "api-key": "zqiwwPi9ItM7y5emE7DJklMsQw4X0pDG8JOaTWQANG1zgjUuF34GHmh4FEZFOvMk",
        // "Access-Control-Allow-Origin" : "*"
      },
      body: JSON.stringify({
        name: username,
        company_name: company,
        email: email,
        experience: experience,
        hiring_position: position,
        phone_number,
        subject,
        message,
      }),
    }
  )
    .then(() => {
      toastMessage()
      const hireNowForm = document.getElementById('hire-now-btn')
      closeHireNowForm && setTimeout(() => hireNowForm.click(), 3000)
    })

  return false;
}
