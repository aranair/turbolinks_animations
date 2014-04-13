# -*- encoding: utf-8 -*-
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)

Gem::Specification.new do |gem|
  gem.name          = "turbolinks_animations"
  gem.version       = "0.0.5"
  gem.authors       = ["aranair"]
  gem.email         = ["boa.homan@gmail.com"]
  gem.description   = %q{Easily add a fade animation turbolinks page transitions}
  gem.summary       = %q{}
  gem.homepage      = "https://github.com/aranair"

  gem.files         = Dir["lib/assets/javascripts/*.js", "lib/*", "README.md"]
end
