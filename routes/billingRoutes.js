const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
//from created middleware to check if user was logged in before charging credits
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
    app.post('/api/stripe', requireLogin, async (req, res) => {
        //create a charge
        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: '$5 for 5 credits',
            source: req.body.id
        });

        //from passport (.session)
        req.user.credits +=5;
        //save to database
        const user = await req.user.save();

        res.send(user);
    });

};