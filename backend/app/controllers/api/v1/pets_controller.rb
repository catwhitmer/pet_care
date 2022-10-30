class Api::V1::PetsController < ApplicationController

    def index 
        @pets = Pet.all

        render json: @pets
    end

    def show 
        set_pet
        
        render json: @pet
    end

    def create 
        @pet = Pet.new(pet_params)
        if @pet.save
            render json: @pet
        else
            render json: { errors: @pet.errors.full_messages }
        end
    end

    def update 
        set_pet
        @pet.update(pet_params)

        render json: @pet
    end

    def destroy
        pet = Pet.find(params["id"])
        pet.destroy

        render json: pet
    end


    private

    def set_pet
        @pet = Pet.find_by(id: params[:id])
    end

    def pet_params
        params.require(:pet).permit(:name, :species, :breed, :age)
    end

end
