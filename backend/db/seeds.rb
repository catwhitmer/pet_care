# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Pet.create([
    { name: 'Fluffy', species: 'cat', age: 3, breed: 'Maine Coon'},
    { name: 'Artio', species: 'dog', age: 1, breed: 'Husky Mix'},
    { name: 'Peanut', species: 'snake', age: 2, breed: 'Fancy Ball Python'}
])

Todo.create([
    { description: 'feed Fluffy', notes: 'twice a day, at 8am and 5pm', pet_id: 1 },
    { description: 'flea treatment', notes: 'every month, on the 20th', pet_id: 2},
    { description: 'clean tank', notes: 'every 2 months, on the 15th', pet_id: 3 }
])