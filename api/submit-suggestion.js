const { IncomingWebhook } = require("@slack/webhook");

module.exports = async (req, res) => {
  try {
    const { email, url } = JSON.parse(req.body);

    const webhook = new IncomingWebhook(process.env.SLACK_WEBHOOK_URL);

    const webhookMessage = {
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `You have new suggestion from: *${email}*`,
          },
          fields: [
            ...(url
              ? [
                  {
                    type: "mrkdwn",
                    text: `*Suggestion:*\n${url}`,
                  },
                ]
              : []),
          ],
        },
      ],
    };

    await webhook.send(webhookMessage);

    res.status(201).end();
  } catch (err) {
    res.status(400).json(err);
  }
};
