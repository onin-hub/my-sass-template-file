=====TO START=====
1. type in terminal "npm init" and hit enter. - (this will create a package.json file)
2. type in terminal "npm install gulp gulp-sass sass --save-dev"
3. create gulpfile.js in root folder
4. type in terminal "npm i gulp-purgecss --save-dev". what this does is, 
    @description:
        By default, purgecss outputs the source CSS with unused selectors removed.
        npm link: https://www.npmjs.com/package/gulp-purgecss


=====NOTE=====
1. remove the _sand.scss file and remove the @import 'sand'; in src/sass/main.scss this is only for testing purpose file.

=====FOLDER STRUCTURE=====
/public
    /dist
        /css
            main.css
/sass
    main.css
/src
    /js
        /components
        /helper
        /layout
        /pages
        /vendors
    /sass
        /abstracts
        /components
        /core
        /helpers
        /layout
        /pages
        /sections
        /typography
        /vendors
        _sand.scss - (for test only you can delete this file)
        main.scss
/views
    /layout
    /pages
    /partials
        footer.html
        header.html
        
        
CLICK: readme.md file then click raw tab for better view of folder structure
