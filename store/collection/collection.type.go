package collection

type Collection struct {
	Id           string     `json:"id,omitempty" bson:"id,omitempty"`
	Name         string     `json:"name,omitempty" bson:"name"`
	Categorycode string     `json:"categorycode,omitempty" bson:"id,omitempty""`
	Categoryname string     `json:"categoryname,omitempty" bson:"id,omitempty""`
	Placeid      string     `json:"placeid,omitempty"`
	Products     []*Product `json:"products,omitempty"`
}

type Product struct {
	Id       string   `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Type     string   `protobuf:"bytes,2,opt,name=type,proto3" json:"type,omitempty"`
	Name     string   `protobuf:"bytes,3,opt,name=name,proto3" json:"name,omitempty"`
	Price    int32    `protobuf:"varint,4,opt,name=price,proto3" json:"price,omitempty"`
	Like     int32    `protobuf:"varint,5,opt,name=like,proto3" json:"like,omitempty"`
	Recipes  []string `protobuf:"bytes,6,rep,name=recipes,proto3" json:"recipes,omitempty"`
	Notation int32    `protobuf:"varint,7,opt,name=notation,proto3" json:"notation,omitempty"`
	Discount int32    `protobuf:"varint,8,opt,name=discount,proto3" json:"discount,omitempty"`
	Picture  string   `protobuf:"bytes,9,opt,name=picture,proto3" json:"picture,omitempty"`
	Size     string   `protobuf:"bytes,10,opt,name=size,proto3" json:"size,omitempty"`
	Position int32    `protobuf:"varint,11,opt,name=position,proto3" json:"position,omitempty"`
}
