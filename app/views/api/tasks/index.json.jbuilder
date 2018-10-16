@tasks.each do |task|
  json.set! task.id do
    json.extract! task, :id, :name, :order, :description, :user_assigned_id,
    :user_completed_id, :due_date, :completed, :section_id
  end
end
