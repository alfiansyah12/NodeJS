	import React, {Component} from 'react';  
	import $ from 'jquery';  
	import axios from 'axios';  
	  
	class Barang extends Component {  
	  
	  constructor() {  
        super();  
    	    this.state = {  
               barang: [], 
               kode_barang: "",
       	      nama_barang: "",  
       	      harga: "",  
               harga: "",
               stok: "", 
               deskripsi: "",   
               image: "", 
       	      action: "",  
       	      search: "",  
               }
    }
               
              bind = (event) => {
                this.setState({[event.target.name]: event.target.value});
              }
            
              Add = () => {
                // mengosongkan isi variabel nip, nama, dan alamat
                // set action menjadi "insert"
                this.setState({
                  kode_barang: "",
                  nama_barang: "",
                  harga: "",
                  stok: "", 
               deskripsi: "",   
               image: "", 
                  action: "insert"
                });
              }
            
              Edit = (item) => {
                /*
                - mengisikan isi variabel nip, nama, alamat sesuai dengan data yang
                akan diedit
                - set action menjadi "update"
                */
                this.setState({
                  kode_barang: "",
                  nama_barang: "",
                  harga: "",
                  stok: "", 
               deskripsi: "",   
               image: "",
                  action: "update"
                });
              }
            
              getBarang = () => {
                let url = "http://localhost:8000/barang";
                // mengakses api untuk mengambil data Barang
                axios.get(url)
                .then(response => {
                  // mengisikan data dari respon API ke array Barang
                  this.setState({barang: response.data.barang});
                })
                .catch(error => {
                  console.log(error);
                });
              }
            
              findBarang = (event) => {
                let url = "http://localhost:8000/barang";
                if (event.keyCode === 13) {
                  // menampung data keyword pencarian
                  let form = {
                    find: this.state.search
                  }
                  // mengakses api untuk mengambil data Barang
                  // berdasarkan keyword
                  axios.post(url, form)
                  .then(response => {
                    // mengisikan data dari respon API ke array Barang
                    this.setState({barang: response.data.barang});
                  })
                  .catch(error => {
                    console.log(error);
                  });
                }
              }
            
              SaveBarang = (event) => {
                event.preventDefault();
                /* menampung data nip, nama dan alamat dari Form
                ke dalam FormData() untuk dikirim  */
                let url = "";
                if (this.state.action === "insert") {
                  url = "http://localhost:8000/barang/save"
                } else {
                  url = "http://localhost:8000/barang/update"
                }
                
            
                let form = {
                  kode_barang: this.state.kode_barang,
                  nama_barang: this.state.nama_barang,
                  harga: this.state.harga,
                  stok: this.state.stok,
                  deskripsi: this.state.deskripsi,
                  image: this.state.image,
                }
            
                // mengirim data ke API untuk disimpan pada database
                axios.post(url, form)
                .then(response => {
                  // jika proses simpan berhasil, memanggil data yang terbaru
                  this.getBarang();
                })
                .catch(error => {
                  console.log(error);
                });
                // menutup form modal
                $("#modal").modal('hide');
              }
            
              Drop = (kode_barang) => {
                let url = "http://localhost:8000/barang/" + kode_barang;
                // memanggil url API untuk menghapus data pada database
                if (window.confirm('Apakah Anda yakin ingin menghapus data ini?')) {
                  axios.delete(url)
                  .then(response => {
                    // jika proses hapus data berhasil, memanggil data yang terbaru
                    this.getBarang();
                  })
                  .catch(error => {
                    console.log(error);
                  });
                }
              }
            
              componentDidMount = () => {
                // method yang pertama kali dipanggil pada saat load page
                this.getBarang();
              }
              
         
	    
	  render(){  
	    return (   
            <div className="m-3 card">  
              <div className="card-header bg-info text-white">Data Barang</div>  
              <div className="card-body">  
              <input type="text" className="form-control mb-2" name="search" value={this.state.search}  
                onChange={this.bind} onKeyUp={this.findBarang} placeholder="Pencarian..." />  
              {/* tampilan tabel Barang */}  
                <table className="table">  
	            <thead>  
	              <tr>  
      	            <th>Kode Barang</th>  
                    <th>Nama Barang</th>  
                    <th>Harga Barang</th> 
                    <th>Stok</th>
                    <th>Deskripsi</th> 
                    <th>Image</th>
                    <th>Option</th>  
                  </tr>  
                </thead>  
               <tbody>  
                  {this.state.barang.map((item,index) => {  
                     return (  
                       <tr key={index}>  
                         <td>{item.kode_barang}</td>  
                         <td>{item.nama_barang}</td>  
                         <td>{item.harga}</td>  
                         <td>{item.stok}</td>  
                         <td>{item.deskripsi}</td>  
                         <td>{item.image}</td>  
                         <td>  
                           <button className="btn btn-sm btn-info m-1" data-toggle="modal"  
             	                      data-target="#modal" onClick={() => this.Edit(item)}>  
              	                        Edit  
         	                      </button>  
        	                      <button className="btn btn-sm btn-danger m-1" onClick={() => this.Drop(item.kode_barang)}>  
                	                        Hapus  
                	                      </button>  
                	                    </td>  
                	                  </tr>  
                	                );  
                	              })}  
                	            </tbody>
                                
                	          </table>  
                	          <button className="btn btn-success" onClick={this.Add}  
                	          data-toggle="modal" data-target="#modal">  
                	            Tambah Data  
                	          </button>  
                	          {/* modal form barang */}  
                	          <div className="modal fade" id="modal">  
                	            <div className="modal-dialog">  
                	              <div className="modal-content">  
                	                <div className="modal-header">  
                	                  Form barang  
                	                </div>  
                	                <form onSubmit={this.SaveBarang}>  
                	                  <div className="modal-body">  
                	                    Kode Barang  
                	                    <input type="number" name="kode_barang" value={this.state.kode_barang} onChange={this.bind}  
                	                    className="form-control" required />  
                                      Nama Barang  
                	                    <input type="text" name="nama_barang" value={this.state.nama_barang} onChange={this.bind}  
                	                    className="form-control" required />
                                      Harga Barang  
                	                    <input type="number" name="harga" value={this.state.harga} onChange={this.bind}  
                	                    className="form-control" required />
                	                    Stok  
                	                    <input type="number" name="stok" value={this.state.stok} onChange={this.bind}  
                	                    className="form-control" required />  
                	                    Deskripsi  
                	                    <input type="text" name="deskripsi" value={this.state.deskripsi} onChange={this.bind}  
                	                    className="form-control" required />  
                                      Image  
                	                    <input type="image" name="image" value={this.state.image} onChange={this.bind}  
                	                    className="form-control" required />
                	                  </div>  
                	                  <div className="modal-footer">  
                	                    <button className="btn btn-sm btn-success" type="submit">  
                	                    Simpan  
                	                    </button>  
                	                  </div>  
                	                </form>  
                	              </div>  
                	            </div>  
                	          </div>  
                	        </div>  
                	      </div>  
                	    );                 
	  }  
	}  
	export default Barang;
