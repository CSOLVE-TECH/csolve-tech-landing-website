@echo off



:: Remove Unnecessary Files
del src\logo.svg src\App.test.js

:: Create Necessary Directories
mkdir src\components src\pages src\styles src\utils

:: Create Additional Subdirectories
mkdir src\components\common src\components\sections

:: Create JavaScript files for components
type nul > src\components\common\Button\Button.js
type nul > src\components\common\Button\Button.css
type nul > src\components\common\Card\Card.js
type nul > src\components\common\Card\Card.css
type nul > src\components\common\Navbar\Navbar.js
type nul > src\components\common\Navbar\Navbar.css

:: Create JavaScript files for sections
type nul > src\components\sections\Hero\Hero.js
type nul > src\components\sections\Hero\Hero.css
type nul > src\components\sections\Features\Features.js
type nul > src\components\sections\Features\Features.css
type nul > src\components\sections\Testimonials\Testimonials.js
type nul > src\components\sections\Testimonials\Testimonials.css

:: Create JavaScript files for pages
type nul > src\pages\Home\Home.js
type nul > src\pages\Home\Home.css
type nul > src\pages\About\About.js
type nul > src\pages\About\About.css
type nul > src\pages\Contact\Contact.js
type nul > src\pages\Contact\Contact.css

:: Create global CSS file
type nul > src\styles\global.css

echo Project setup completed successfully!