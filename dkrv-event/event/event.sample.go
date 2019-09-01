package event

func getEventSampleList() *[]*Event{
	return &[]*Event{
		&Event{
			Id: "event-1",
			Name: "Concert dip",          
			Phone: "+221.77.695.36.25",                
			Email: "doudou.leydi.fall@gmail.com",           
			Place: &Place{
				Id: "place-1",
				Name: "Grand Théâtre de Dakar",
				Nbplace: 200,
				Address: &Address {
					Location: &Location{
						Lng: 21.877,
						Lat: 23.543,
					},
					FormatedAddress: "1 rue corniche ouest, dakar",
					Cpc: "1 rue corniche ouest, dakar",
					Zone: &Zone{
						Name: "Corniche Ouest",
						Code: "corniche_ouest",
					},
				},
				Src: "http://www.france-guineeequatoriale.org/wp-content/uploads/2016/02/Grand-Th%C3%A9atre-Dakar.jpg",
			},  
			Date: "1567152547",     
			Categories: &[]Category{
				&Category{
					Name:"Concert",
					Code: "concert",
				}, 
				&Category{
					Name:"Hip Hop",
					Code: "hiphop",
				}, 
			},
			Description: "A l'occasion de son anniversaire dip doundou guiss organise un grand concert au grand théâtre de Dakar",    
			Price: &Price {
				Base: 14000,
				Currency: "FCFA",
			},
			Location: &Location {
				Address: "1 rue corniche ouest, dakar",
				Cpc: "1 rue corniche ouest, dakar",
				Zone: "Corniche Ouest",
				Coordinate: &Coordinate{
					Lon: 1,
					Lat: 2,
				},
			},
			Nbplace: 100,                       
			Gallery: &Gallery{
				Main: 1,
				Pictures: &[]*Picture {
					&Picture {
						Src: "http://www.france-guineeequatoriale.org/wp-content/uploads/2016/02/Grand-Th%C3%A9atre-Dakar.jpg",
					},
				},
			},            
			artists: &[]*Artist {
				&Artist{
					ID: "event-artist-1",
					Name: "Dip Doundou Guiss",
					Src: "https://www.google.com/imgres?imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D347079298788988&imgrefurl=https%3A%2F%2Ffr-fr.facebook.com%2Fdipdoundouguissofficiel%2F%3F__tn__%3D%252AsH-R&docid=dQE8BkxcDOMIuM&tbnid=QQU0_iLuwi-UOM%3A&vet=10ahUKEwiJ_b-0uq3kAhUkAWMBHfZRDewQMwg9KAIwAg..i&w=959&h=960&bih=576&biw=1200&q=dip%20doundou%20guiss&ved=0ahUKEwiJ_b-0uq3kAhUkAWMBHfZRDewQMwg9KAIwAg&iact=mrc&uact=8",
				},
			},
			hosts: &[]*Artist {
				&Artist{
					ID: "event-artist-2",
					Name: "BM Jaay",
					Src: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiVuqOhq63kAhVSJBoKHefrBAwQjRx6BAgBEAQ&url=http%3A%2F%2Fwww.rapdjolof.com%2Fwebzine%2Fnews%2Fitem%2F3877-bm-jaay-marouane-3&psig=AOvVaw05tcV9HABnQKeriC3q7Fn6&ust=1567348741827583"
				},
				&Artist{
					ID: "event-artist-3",
					Name: "DopeBoy DMG",
					Src: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiVuqOhq63kAhVSJBoKHefrBAwQjRx6BAgBEAQ&url=http%3A%2F%2Fwww.rapdjolof.com%2Fwebzine%2Fnews%2Fitem%2F3877-bm-jaay-marouane-3&psig=AOvVaw05tcV9HABnQKeriC3q7Fn6&ust=1567348741827583"
				},
			}, 
		},
		Likes: 12300,
	}
}