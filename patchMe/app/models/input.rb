class Input < ActiveRecord::Base
  belongs_to :forms
  enum type: [:number, :text_line, :text_block]
end
