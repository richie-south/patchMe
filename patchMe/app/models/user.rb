class User < ActiveRecord::Base
  has_one :login
  has_many :forms
  # validates_presence_of :uid
end
