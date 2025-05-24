export const createNewPasswordTemplate = (resetPasswordLink: string) => {
  return `
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Primepro Agent</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet"
      />
    </head>
    <body
      style="
        margin: 0;
        padding: 0;
        font-family: &quot;PT Sans&quot;, sans-serif;
        font-weight: 400;
        font-style: normal;
        padding: 0.5rem;
      "
    >
      <!-- TODO: Change link and image to Primepro -->
      <div
        style="
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1rem 0;
        "
      >
        <a href="https://primeproindonesia.com" target="_blank">
          <img
            src="https://agent.primeproindonesia.com/images/primepro.png"
            width="100"
            height="100"
            alt="Primepro Logo"
          />
        </a>
      </div>
      <div
        style="
          display: flex;
          flex-direction: column;
          max-width: 1024px;
          margin: 0 auto;
        "
      >
        <h1 style="margin-bottom: 0">Create Password</h1>
        <p>
          Congratulations, your Primepro Agent account is ready to use. Click the
          button below to create new password:
        </p>
        <a
          href="${resetPasswordLink}"
          role="button"
          style="
            background-color: #ffff00;
            color: #000000;
            text-decoration: none;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            margin-bottom: 1rem;
            font-size: 20px;
            font-weight: 700;
            width: fit-content;
          "
        >
          Create New Password
        </a>
        <p style="font-size: 14px">
          If the button doesn’t work, copy and paste this link into your browser:
          <br />
          <a href="${resetPasswordLink}" style="font-size: 14px"
            >${resetPasswordLink}</a
          >
        </p>
        <p style="font-size: 14px">
          This link will expire in 1 hour. If you have issue creating new
          password, please contact
          <a href="mailto:abby@primeproagent.com">abby@primeproagent.com</a>
        </p>
      </div>
    </body>
  </html>
  `;
};
