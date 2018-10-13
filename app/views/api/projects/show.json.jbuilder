json.set! :projects do
  json.extract! @project, :id, :name
end

json.set! :sections do
  @project.sections.each do |section|
    json.set! section.id do
      json.extract! section, :id, :project_id, :order, :name
    end
  end
end

json.set! :tasks do
  @project.tasks.each do |task|
    json.set! task.id do
      json.extract! task,
        :id, :name, :order, :description, :user_assigned_id, :user_completed_id, 
        :due_date, :completed, :section_id
    end
  end
end
