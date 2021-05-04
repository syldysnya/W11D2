json.partial! 'api/pokemon/pokemon', pokemon: @pokemon 
json.image_url asset_path("pokemon_snaps/#{@pokemon.image_url}")