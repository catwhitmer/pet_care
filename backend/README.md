Pet Care app

This app provides a database and web interface for users to:

-Create a pet which allows the user to see all the pets, and allows the user to manage the pets. 
-A user can create and delete pets. 
-A user can assign To-Dos to each pet.
-A user can create and delete To-Dos.
-Pet inputs are validated by name, species, breed, and age presence. 
-To-Dos are validated by description and notes presence.
-Also the pet's id must be present as well.

This backend was built with Rails, and with the use of ActiveRecord for storing information in a database. The frontend was build using React and Redux.

Usage Backend 1.clone repository 2.bundle install 3.rake db:migrate 4.rails s -p 30001 5.Then navigate to localhost:3001/pets in your browser to see the API.

Usage Fontend 1.clone repository 2. npm start to see it in action.

Contributing Bug reports and pull requests are welcome on GitHub at https://github.com/catwhitmer/pet_care-frontend and https://github.com/catwhitmer/pet_care-backend. This project is intended to foster collaboration; contributors are expected to adhere to the Contributor Covenant code of conduct.

License This software is available as open source under the terms of the MIT License.