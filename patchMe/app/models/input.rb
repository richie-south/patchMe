class Input < ActiveRecord::Base
  belongs_to :forms
  enum type: [:number, :text_line, :text_block, :email, :header_title, :header_description]
end
