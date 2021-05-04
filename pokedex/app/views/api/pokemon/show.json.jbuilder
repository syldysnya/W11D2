json.pokemon do 
  json.partial! 'api/pokemon/pokemon', pokemon: @pokemon 
  json.image_url asset_path("pokemon_snaps/#{@pokemon.image_url}")
end
json.items @pokemon.items.each do |item|
  json.set! item.id, item
end