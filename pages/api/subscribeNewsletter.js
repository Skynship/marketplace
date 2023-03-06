export default async (req = {}, res = {}) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    try {
        const result = await fetch('https://api.convertkit.com/v3/forms/3893489/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                api_key: process.env.CONVERT_KIT_KEY,
                email
            })
        });

        const data = await result.json();

        if (!result.ok) {
            return res.status(500).json({ error: data.error.email[0] });
        }

        return res.status(201).json({ error: '' });
    } catch (error) {
        return res.status(500).json({ error: error.message || error.toString() });
    }
};