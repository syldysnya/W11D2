# json.key_format! camelize: :lower
json.partial! 'api/guests/guest', guest: @guest
json.gifts @guest.gifts
