## Résumé starter kit
A résumé (with the accent marks) is “a brief written account of personal, educational, and professional qualifications and experience, as that prepared by an applicant for a job.” It’s pronounced [ rez–oo-mey ] as opposed to how resume is pronounced [ ri-zoom ]. [Dictionary.com](https://www.dictionary.com/e/resume-vs-resume-a-brief-account-of-their-differences/).

Resume comes as a Statamic starter kit which will help you quickly generate a resume with the following blocks:

* Personal Details
* Social Media
* Languages
* Hobbies
* Experience
* Education
* Projects
* Courses
* Skills

## Features
* Block based resume builder, easily add/remove sections as you need them.
* Light/Dark mode that follows the user OS preference.
* Responsive images
* TailwindCSS for Styling
* Alpine.js
* Self hosted font from  [Fontsource](https://fontsource.org/) 

## Installation
To install Résumé, follow the [Installing a starter kit](https://statamic.dev/starter-kits/installing-a-starter-kit). 
Note that you will need to be running **Statamic 4.x**.

### Installing into an existing site
```
php please starter-kit:install lucky-media/resume
```   

### Installing via the Statamic CLI Tool
If you have [Statamic’s CLI Tool installed](https://github.com/statamic/cli), you can create a new Statamic installation with the Résumé in one line:

```bash
statamic new my-site lucky-media/resume
```

## Styling
The design of Résumé is done entirely with TailwindCSS. Because we follow the primary/secondary naming convention making changes is very easy and straight forward. All you have to do is edit the `tailwind.config.js` file.
  * Font Family - default is: DM Sans.
  * Colors - easily to change as we use primary/secondary naming conventions.

## Fonts
For fonts we use [Fontsource](https://fontsource.org/) to self host them. In order to change the default font please follow these steps:

1. Go to the [Fontsource](https://fontsource.org/) website and pick a font
2. Use `npm` or `yarn` to install the desired font package 
3. Go to `resume.js` and import the font.

> Note: For better performance only import the used weights in the project.  Résumé for example uses  `400, 500, 700` and we only import those weights to keep the bundle small.

More info on the [official documentation of Font Source](https://fontsource.org/docs/introduction).

## Compiling Assets
By default we make use of Vite with [Laravel](https://laravel.com/docs/9.x/vite) to compile all the assets.
Make sure to run the following commands after installing the starter-kit.

* `npm install` - to install all the required dependencies.
* `npm run dev` - to run in development mode.
* `npm run build` - to compile assets for production.

## Commercial addon
Résumé is a commercial starter kit - you **must purchase a license** via the [Statamic Marketplace](https://statamic.com/starter-kits/luckymedia/resume) to use it in your project.

## 🐞 Bugs and 💡 Feature Requests
Please refer to the issues tab to submit a Bug or a Feature Request.

## Credits
Résumé was brought to you by the lovely team at [Lucky Media](https://www.luckymedia.dev/), we are a digital agency focused on professional, innovative, user-oriented web design & development. If you have any project in mind feel free to contact us.

Last but not least thanks to the creators/contributors of the following packages which made Résumé a reality:

* Statamic
* Tailwind CSS
* Alpine.js
