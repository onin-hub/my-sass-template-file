=====GO TO THE -variables.scss file=====
Look in the comment and you will see other feature of sass


============================================================================================
Use @debug to check value in loop

        Example below

        @each $key, $value in $colors {
            @debug "key: #{$key} == value: #{$value}"; // this will be appear in the terminal.
        }

        Document link: https://sass-lang.com/documentation/at-rules/debug
============================================================================================

=====OTHER USEFULL FEATURE OF SASS=====
1. @mixin and @include ==> Video Link: https://www.youtube.com/watch?v=eW1nhSZaPEw
    @description:
        Mixins allow you to define styles that can be re-used throughout your stylesheet
        Document link: https://sass-lang.com/documentation/at-rules/mixin

        Filename: not yet created.

2. Functions ==> Video Link: https://www.youtube.com/watch?v=l0VljiUg2d0
    @description:
        Functions allow you to define complex operations on SassScript values that you can re-use throughout your stylesheet. They make it easy to abstract out common formulas and behaviors in a readable way.
        Document link: https://sass-lang.com/documentation/at-rules/function

        Filename: not yet created.

3. Making Utility Classes ==> 
    @description:
        Generate your own custom class and call it a day.
        example: .text-size-12 , .text-size-14 , .text-size-16 , .text-size-18 etc.
        Video link: 
            https://www.youtube.com/watch?v=JIskeGNEVEk
            OR
            https://dev.to/ahmedsarhan/how-to-build-your-own-utility-framework-using-scss-25dh

        Filename: _utilities.scss

4. Media Queries - (breakpoints) ==>
    @description:
        build-in @content feature of sass - (usefull) watch in the link below.
        Video link: https://www.youtube.com/watch?v=3R4fpnIAozs&t=3s
        Filename: not yet created.

5. Exnted - (Feature) ==>
    @description:
        When one class extends another, Sass styles all elements that match the extender as though they also match the class being extended.

        Sometimes you want to write a style rule that’s only intended to be extended. In that case, you can use placeholder selectors, which look like class selectors that start with % instead of .. Any selectors that include placeholders aren’t included in the CSS output, but selectors that extend them are.

        EXAMPLE BELOW:

        %flex-layout {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            box-sizing: border-box;
        }

        .navbar {
                @extend %flex-layout;
                padding: $base-padding $base-padding * 2;
                box-shadow: $base-box-shadow;
            .site-title {
                font-size: $font-size-lg;
            }
            .container {
                @extend %flex-layout;
            }
        }

        Video link: https://www.youtube.com/watch?v=vqI9kuoy6xM
        Document link: https://sass-lang.com/documentation/at-rules/extend

        Filename: not yet created.

6. !default - (feature) ==>
        @description:
            You can assign to variables if they aren’t already assigned by adding the !default flag to the end of the value. This means that if the variable has already been assigned to, it won’t be re-assigned, but if it doesn’t have a value yet, it will be given one.
            
            This is what it looks like: $example: 'value' !default;
            Video link: https://www.youtube.com/watch?v=btMR5e4ZRM4
            Document link: https://thoughtbot.com/blog/sass-default