class Entry
	include Mongoid::Document
	field :name, type: String
	field :done,type: String, :default => false
	validates :name ,presence: true

	def as_json(options = {})
		json = super(options)
		json["id"] = self.id.to_s
		json.delete "_id"
		json
	end
end
