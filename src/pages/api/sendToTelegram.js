export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { phone, comment } = req.body;
        const BOT_TOKEN = process.env.BOT_TOKEN;
        const CHAT_ID = process.env.CHAT_ID;
        const message = `
Телефон: ${phone}
Комментарий: ${comment || 'Без комментария'}
        `;

        try {
            const response = await fetch(
                `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        chat_id: CHAT_ID,
                        text: message,
                        parse_mode: 'HTML',
                    }),
                }
            );

            if (response.ok) {
                res.status(200).json({ message: 'Сообщение успешно отправлено!' });
            } else {
                res.status(500).json({ error: 'Ошибка при отправке сообщения' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Ошибка при отправке сообщения' });
        }
    } else {
        res.status(405).json({ error: 'Метод не поддерживается' });
    }
}
