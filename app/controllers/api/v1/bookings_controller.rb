class Api::V1::BookingsController < ApplicationController
  before_action :set_booking, only: %i[show]

  def index
    booking = Booking
                .where(time_slot: Date.today.beginning_of_day..Date.today.end_of_day)
                .order(time_slot: :asc)

    booking_times =
    render json: booking
  end

  def create
    booking = Booking.create!(booking_params)
    
    if booking
      render json: booking
    else
      render json: booking.errors
    end
  end

  def show
    render json: @booking
  end

  def destroy
    Booking.destroy(params[:id])
    render json: { message: 'You are no longer booked for this time slot' }
  end

  private

  def booking_params
    params.require(:booking).permit(:name, :phone, :time_slot)
  end

  def set_booking
    @booking = Booking.where(time_slot: params[:id])
  end
end
