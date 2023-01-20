class CreateBookings < ActiveRecord::Migration[7.0]
  def change
    create_table :bookings do |t|
      t.string :name, null: false
      t.string :phone, null: false
      t.datetime :time_slot, null: false

      t.timestamps
    end
  end
end
