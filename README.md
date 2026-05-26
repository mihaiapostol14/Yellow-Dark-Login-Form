# Yellow Dark Login Form


## Overview

**Yellow Dark Login Form** is a sophisticated client-side authentication interface combining minimalist dark theme aesthetics with robust form validation logic. The application delivers a polished user experience through real-time input validation, dynamic password visibility toggling, and contextual feedback messaging—all powered by vanilla JavaScript without external dependencies.

The project exemplifies best practices in form handling, DOM manipulation, and user interaction patterns, making it suitable for production-level authentication interfaces or as a foundational component in larger web applications.

---

## Preview

![Yellow Dark Login Form Preview](https://github.com/mihaiapostol14/Yellow-Dark-Login-Form/blob/410ed0c59dacaa8e43a9e9700f7afc08aca41fd9/assets/preview.png)

---

## Tech Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic markup structure, form elements, accessibility attributes |
| **CSS3** | Advanced layouts (flexbox), CSS variables, transitions, pseudo-classes, theme customization |
| **JavaScript (ES6+)** | Event-driven validation, DOM manipulation, state management, class-based architecture |

---

## Installation

```bash
git clone https://github.com/mihaiapostol14/Yellow-Dark-Login-Form.git
cd Yellow-Dark-Login-Form
```

---

## Detailed Features

### 1. **Real-Time Form Validation**
- **Dynamic Input Validation**: Validates username and password fields as users type
- **Validation Rules**:
  - Username: Minimum 5 characters required
  - Password: Minimum 8 characters required
  - Both fields are mandatory for form submission
- **Visual Feedback**: Real-time border color changes indicating validation state (error: `#e74c3c`, success: `#32D190`)

### 2. **Password Visibility Toggle**
- **Eye Icon Interaction**: Click toggles between password and text input types
- **Icon State Management**: Font Awesome icons dynamically update (`fa-eye` / `fa-eye-slash`)
- **Smooth UX**: Non-intrusive password management without page reload

### 3. **Username Auto-Capitalization**
- **Smart Input Processing**: Automatically capitalizes the first character of username input
- **Preserves User Input**: Maintains user-entered value without modification beyond first character

### 4. **Contextual Hint Messaging**
- **Error Messages**: Displays specific validation errors in real-time
  - "Username is required"
  - "Password is required"
  - "Username must be at least 5 characters"
  - "Password must be at least 8 characters"
- **Success Indication**: Shows "Looks good ✔" when all validations pass
- **Color-Coded**: Error messages in red (#e74c3c), success messages in green (#32D190)

### 5. **Semantic Form Structure**
- Remember Me checkbox with accent color customization
- Forgot Password link for account recovery workflows
- Register account link for user onboarding
- Proper label-input associations for accessibility

### 6. **Dark Theme Aesthetic**
- **Color Palette**:
  - Primary Background: `#191200` (charcoal black)
  - Input Background: `#272111` (dark brown)
  - Accent Color: `#dbb205` / `#f0be15` (mustard yellow)
  - Page Background: `#f2b616` (warm gold)
- **Typography**: Roboto font family with variable weights for hierarchy
- **Responsive Design**: Flexible container (max-width: 400px) with centered layout

### 7. **Event-Driven Architecture**
- **DOMContentLoaded**: Initializes LoginValidator class after DOM parse
- **Input Events**: Real-time validation on keystroke
- **Click Handlers**: Password visibility toggle and form submission
- **Event Prevention**: Prevents default form submission for custom handling

---

## Core Logic Flow

```
User Input
    ↓
Input Event Triggered
    ↓
Validation Rules Applied
    ↓
UI Updated (Border Color + Message)
    ↓
Form State Stored in Component
    ↓
Visual Feedback Rendered
```

The `LoginValidator` class encapsulates all validation logic, maintaining separation of concerns between HTML structure, CSS styling, and JavaScript behavior. Configuration-driven initialization allows for flexible selector mapping.

---

## Browser Compatibility

- Modern browsers with ES6 support (Chrome, Firefox, Safari, Edge)
- Font Awesome 7.0.1 CDN for icon rendering
- CSS3 Grid and Flexbox support required

## Author

[Mihai Apostol](https://github.com/mihaiapostol14)


## License

This project is open source and available under the MIT License.

