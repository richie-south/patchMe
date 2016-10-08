class Form < ActiveRecord::Base
  belongs_to :users
  has_many :inputs

end
