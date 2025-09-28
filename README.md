# email-autofill-bookmarklet
📧 Simple JavaScript bookmarklet that automatically fills email input fields on any website


# Email Autofill Bookmarklet | מילוי מייל אוטומטי

[🇺🇸 English](#english) | [🇮🇱 עברית](#עברית)

---

## English

A simple JavaScript bookmarklet that automatically fills email input fields on any webpage with your predefined email address.

### 🚀 Features

- Automatically detects email input fields on any webpage
- Supports various email field selectors (type, name, id, placeholder, class)
- Triggers proper input events for compatibility with modern web forms
- Provides visual feedback through alerts
- Works on all websites without requiring extensions

### 📦 Installation

1. **Copy the bookmarklet code** from the JavaScript file
2. **Create a new bookmark** in your browser:
   - Right-click on your bookmarks bar
   - Select "Add page" or "Add bookmark"
   - Name it something like "Fill Email"
   - Paste the JavaScript code into the URL field
3. **Customize your email**: Replace `'your.email@example.com'` with your actual email address

### 🔧 Usage

1. Navigate to any webpage with an email input field
2. Click the bookmarklet in your bookmarks bar
3. The first email field found will be automatically filled
4. You'll see a confirmation alert with your email address

### 🎯 Supported Input Types

The bookmarklet detects email fields using multiple selectors:
- `input[type="email"]` - Standard email input type
- `input[name*="email"]` - Fields with "email" in the name attribute
- `input[id*="email"]` - Fields with "email" in the id attribute
- `input[placeholder*="email"]` - Fields with "email" in placeholder text
- `input[class*="email"]` - Fields with "email" in CSS classes

### ⚙️ Customization

To modify the bookmarklet:

1. **Change your email**: Update the `email` variable with your address
2. **Add more selectors**: Extend the `querySelectorAll` string with additional CSS selectors
3. **Modify behavior**: Change the alert messages or add additional functionality

### 🔒 Privacy & Security

- The bookmarklet runs entirely in your browser
- No data is sent to external servers
- Your email is only stored within the bookmarklet code
- Works offline once installed

### 🌐 Browser Compatibility

Compatible with all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge
- Opera

### 📝 License

This project is open source and available under the [MIT License](LICENSE).

### 🤝 Contributing

Feel free to submit issues, fork the repository, and create pull requests for any improvements.

### ⚠️ Disclaimer

Use this bookmarklet responsibly and only on websites where you intend to provide your email address. Always review the webpage and ensure it's legitimate before auto-filling personal information.

---

## עברית

כלי JavaScript פשוט שממלא אוטומטית שדות מייל בכל אתר עם כתובת המייל שלכם.

### 🚀 תכונות

- זיהוי אוטומטי של שדות מייל בכל אתר אינטרנט
- תמיכה בסוגים שונים של שדות מייל (type, name, id, placeholder, class)
- הפעלת אירועים מתאימים לתאימות עם טפסים מודרניים
- משוב חזותי באמצעות התראות
- עובד בכל האתרים ללא צורך בהתקנת תוספים

### 📦 התקנה

1. **העתיקו את קוד ה-bookmarklet** מקובץ ה-JavaScript
2. **צרו bookmark חדש** בדפדפן שלכם:
   - לחצו לחיצה ימנית על סרגל הסימניות
   - בחרו "הוסף דף" או "הוסף סימנייה"
   - קראו לו משהו כמו "מלא מייל"
   - הדביקו את קוד ה-JavaScript בשדה הכתובת
3. **התאימו את המייל שלכם**: החליפו את `'your.email@example.com'` בכתובת המייל האמיתית שלכם

### 🔧 שימוש

1. נווטו לכל אתר עם שדה מייל
2. לחצו על ה-bookmarklet בסרגל הסימניות
3. השדה הראשון שנמצא יתמלא אוטומטית
4. תקבלו התראת אישור עם כתובת המייל שלכם

### 🎯 סוגי שדות נתמכים

ה-bookmarklet מזהה שדות מייל באמצעות מספר סלקטורים:
- `input[type="email"]` - סוג שדה מייל סטנדרטי
- `input[name*="email"]` - שדות עם "email" במאפיין name
- `input[id*="email"]` - שדות עם "email" במאפיין id
- `input[placeholder*="email"]` - שדות עם "email" בטקסט placeholder
- `input[class*="email"]` - שדות עם "email" במחלקות CSS

### ⚙️ התאמה אישית

כדי לשנות את ה-bookmarklet:

1. **שנו את המייל שלכם**: עדכנו את המשתנה `email` עם הכתובת שלכם
2. **הוסיפו סלקטורים נוספים**: הרחיבו את מחרוזת `querySelectorAll` עם סלקטורי CSS נוספים
3. **שנו התנהגות**: שנו את הודעות ההתראה או הוסיפו פונקציונליות נוספת

### 🔒 פרטיות ואבטחה

- ה-bookmarklet רץ לחלוטין בדפדפן שלכם
- אין שליחת מידע לשרתים חיצוניים
- המייל שלכם מאוחסן רק בתוך קוד ה-bookmarklet
- עובד במצב לא מקוון לאחר ההתקנה

### 🌐 תאימות דפדפנים

תואם לכל הדפדפנים המודרניים כולל:
- Chrome
- Firefox
- Safari
- Edge
- Opera

### 📝 רישיון

הפרויקט הזה הוא קוד פתוח וזמין תחת [רישיון MIT](LICENSE).

### 🤝 תרומה לפרויקט

אתם מוזמנים להגיש בעיות, לעשות fork למאגר, וליצור pull requests לכל שיפור.

### ⚠️ הסתייגות

השתמשו ב-bookmarklet הזה באחריות ורק באתרים שבהם אתם מתכוונים לספק את כתובת המייל שלכם. תמיד בדקו את האתר וודאו שהוא לגיטימי לפני מילוי מידע אישי באופן אוטומטי.

---

[⬆️ Back to top | חזרה למעלה](#email-autofill-bookmarklet--מילוי-מייל-אוטומטי)
