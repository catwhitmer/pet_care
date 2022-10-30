class Api::V1::TodosController < ApplicationController

    before_action :set_pet

    def index 
        @todos = Todo.all

        render json: @todos
    end

    def show 
        set_todo
        
        render json: @todo
    end

    def create 
        @todo = @pet.todos.new(todo_params)
        if @todo.save
            render json: @pet
        else
            render json: { errors: @todo.errors.full_messages }
        end
    end

    def update 
        set_todo
        todo.update(todo_params)

        render json: @todo
    end

    def destroy
    todo = Todo.find(params["id"])
    pet = Pet.find(todo.pet_id)
    todo.destroy

    render json: @pet
    end


    private

    def set_todo
        @todo = Todo.find_by(id: params[:id])
    end

    def set_pet
        @pet = Pet.find_by(id: params[:pet_id])
    end

    def todo_params
        params.require(:todo).permit(:description, :notes, :pet_id)
    end

end
