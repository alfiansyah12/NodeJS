	import React, {Component} from 'react';  
	import $ from 'jquery';  
	import axios from 'axios';  
	  
	class Siswa extends Component {  
	  
	  constructor() {  
        super();  
    	    this.state = {  
       	      identitas: [], 
       	      absen: "",  
       	      nama: "",  
       	      kelas: "",  
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
                  absen: "",
                  nama: "",
                  kelas: "",
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
                  absen: item.absen,
                  nama: item.nama,
                  kelas: item.kelas,
                  action: "update"
                });
              }
            
              getIdentitas = () => {
                let url = "http://localhost:2910/siswa";
                // mengakses api untuk mengambil data identitas
                axios.get(url)
                .then(response => {
                  // mengisikan data dari respon API ke array identitas
                  this.setState({identitas: response.data.identitas});
                })
                .catch(error => {
                  console.log(error);
                });
              }
            
              findIdentitas = (event) => {
                let url = "http://localhost:2910/siswa";
                if (event.keyCode === 13) {
                  // menampung data keyword pencarian
                  let form = {
                    find: this.state.search
                  }
                  // mengakses api untuk mengambil data identitas
                  // berdasarkan keyword
                  axios.post(url, form)
                  .then(response => {
                    // mengisikan data dari respon API ke array identitas
                    this.setState({identitas: response.data.identitas});
                  })
                  .catch(error => {
                    console.log(error);
                  });
                }
              }
            
              SaveIdentitas = (event) => {
                event.preventDefault();
                /* menampung data nip, nama dan alamat dari Form
                ke dalam FormData() untuk dikirim  */
                let url = "";
                if (this.state.action === "insert") {
                  url = "http://localhost:2910/siswa/save"
                } else {
                  url = "http://localhost:2910/siswa/update"
                }
                
            
                let form = {
                  absen: this.state.absen,
                  nama: this.state.nama,
                  kelas: this.state.kelas
                }
            
                // mengirim data ke API untuk disimpan pada database
                axios.post(url, form)
                .then(response => {
                  // jika proses simpan berhasil, memanggil data yang terbaru
                  this.getIdentitas();
                })
                .catch(error => {
                  console.log(error);
                });
                // menutup form modal
                $("#modal").modal('hide');
              }
            
              Drop = (absen) => {
                let url = "http://localhost:2910/siswa/" + absen;
                // memanggil url API untuk menghapus data pada database
                if (window.confirm('Apakah Anda yakin ingin menghapus data ini?')) {
                  axios.delete(url)
                  .then(response => {
                    // jika proses hapus data berhasil, memanggil data yang terbaru
                    this.getIdentitas();
                  })
                  .catch(error => {
                    console.log(error);
                  });
                }
              }
            
              componentDidMount = () => {
                // method yang pertama kali dipanggil pada saat load page
                this.getIdentitas();
              }
              
         
	    
	  render(){  
	    return (   
            <div className="m-3 card">  
              <div className="card-header bg-info text-white">Data Siswa</div>  
              <div className="card-body">  
              <input type="text" className="form-control mb-2" name="search" value={this.state.search}  
                onChange={this.bind} onKeyUp={this.findIdentitas} placeholder="Pencarian..." />  
              {/* tampilan tabel pegawai */}  
                <table className="table">  
	            <thead>  
	              <tr>  
      	            <th>Absen</th>  
                    <th>Nama</th>  
                    <th>Kelas</th>  
                    <th>Option</th>  
                  </tr>  
                </thead>  
               <tbody>  
                  {this.state.identitas.map((item,index) => {  
                     return (  
                       <tr key={index}>  
                         <td>{item.absen}</td>  
                         <td>{item.nama}</td>  
                         <td>{item.kelas}</td>  
                         <td>  
                           <button className="btn btn-sm btn-info m-1" data-toggle="modal"  
             	                      data-target="#modal" onClick={() => this.Edit(item)}>  
              	                        Edit  
         	                      </button>  
        	                      <button className="btn btn-sm btn-danger m-1" onClick={() => this.Drop(item.absen)}>  
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
                	          {/* modal form pegawai */}  
                	          <div className="modal fade" id="modal">  
                	            <div className="modal-dialog">  
                	              <div className="modal-content">  
                	                <div className="modal-header">  
                	                  Form Identitas  
                	                </div>  
                	                <form onSubmit={this.SaveIdentitas}>  
                	                  <div className="modal-body">  
                	                    Absen  
                	                    <input type="number" name="absen" value={this.state.absen} onChange={this.bind}  
                	                    className="form-control" required />  
                	                    Nama  
                	                    <input type="text" name="nama" value={this.state.nama} onChange={this.bind}  
                	                    className="form-control" required />  
                	                    Kelas  
                	                    <input type="text" name="kelas" value={this.state.kelas} onChange={this.bind}  
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
	export default Siswa;
