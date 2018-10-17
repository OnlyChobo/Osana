json.set! :section do
  json.set! @section.id do
    json.extract! @section, :id, :name, :order, :project_id
  end
end
