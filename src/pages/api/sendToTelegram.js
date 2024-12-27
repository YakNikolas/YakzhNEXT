export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { phone, comment } = req.body;
        const BOT_TOKEN = '8182716447:AAESARn_ye7lH8JO1v6-DASKq440A4Rc5Ec';
        const CHAT_ID = '-1002347352611';
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
