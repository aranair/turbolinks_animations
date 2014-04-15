## Installation

Add this line to your application's Gemfile:

    gem 'turbolinks_animations', github: 'aranair/turbolinks_animations', branch: 'master'

And then execute:

    $ bundle

## Usage

- Add class `js-turbolink-content` to any element, for example, in the master container 
div in your page: 
- Data attribute `animation` to the same div e.g. data-animation="slide-left"
- Possible values for animations right now are `slide-left`, `slide-right`, `fade`
- When sliding left or right, the transition will be automatically reversed on restoration of the same element.
- Data attribute `duration` for the duration of the slides
- You can have specify different divs for the transition on every page but different animations are still a little buggy.

## Example
```erb
<div class="js-turbolink-content container" data-animation="slide-right" data-duration="200">
  <%= yield %>
</div>
```

## Dependencies
- jQuery
- jQuery UI

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
