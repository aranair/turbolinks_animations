# TurbolinksTransition

## Installation

Add this line to your application's Gemfile:

    gem 'turbolinks_animations', github: 'aranair/turbolinks_animations', branch: 'master'

And then execute:

    $ bundle

## Usage

- Add class `js-turbolink-content` to any element, for example, in the master container 
div in your page: 
- Add a data attribute called `animation` to the same div e.g. data-animations="slide-left"
- Possible values for animations right now are `slide-left`, `slide-right`, `fade`
- When sliding left or right, the transition will be automatically reversed on restoration of the same element.

```erb
<div class="js-turbolink-content container" data-animations="slide-right">
  <%= yield %>
</div>
```

Dependencies: 
- jQuery
- jQuery ui

Thats all!

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
