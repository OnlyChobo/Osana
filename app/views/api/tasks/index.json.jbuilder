@tasks.each do |task|
  json.set! task.id do
    json.extract! task, :name
  end
end
