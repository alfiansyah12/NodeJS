import React, {Component} from 'react';  
import $ from 'jquery';  
import axios from 'axios';  
import Modal from "../page/Modal";
  
class Barang extends Component {  
  
  constructor(){
    super();
    this.state = {
        barang: [],
        kode_barang: "",
        nama_barang: "",
        harga: "",
        stok: "",
        deskripsi: "",
        image: "",
        action: "",
        message: ""
    }
}

bind = (event) => {
    this.setState({[event.target.name] : event.target.value});
}

Add = () => {
    $("#modal_barang").modal("show");
    this.setState({
        action: "insert",
        kode_barang: "",
        nama_barang: "",
        harga: "",
        stok: "",
        deskripsi: "",
        image: ""
    });
    document.getElementById('file').value = "";
}

Edit = (item) => {
    $("#modal_barang").modal("show");
    this.setState({
        action: "update",
        kode_barang: item.kode_barang,
        nama_barang: item.nama_barang,
        harga: item.harga,
        stok: item.stok,
        deskripsi: item.deskripsi
    });
    document.getElementById('file').value = "";
}

get_barang = () => {
    let url = "http://localhost:8000/barang";
    axios.get(url)
    .then(response => {
        this.setState({barang: response.data.data});
    })
    .catch(error => {
        console.log(error);
    });
}

Drop = (kode_barang) => {
    if (window.confirm("Apakah anda yakin ingin menghapus data ini?")) {
        let url = "http://localhost:8000/barang/" + kode_barang;
        axios.delete(url)
        .then(response => {
            this.setState({message:response.data.message});
            this.get_barang();
        })
        .catch(error => {
            console.log(error);
        });
    }
}

componentDidMount = () => {
    this.get_barang();
}

Save = (event) => {
    event.preventDefault();
    /* menampung data barang dari Form ke dalam FormData() untuk dikirim  */
    let url = "";
    if (this.state.action === "insert") {
        url = "http://localhost:8000/barang/save"
    } else {
        url = "http://localhost:8000/barang/update"
    }

    let form = new FormData();
    form.append("action", this.state.action);
    form.append("kode_barang", this.state.kode_barang);
    form.append("nama_barang", this.state.nama_barang);
    form.append("harga", this.state.harga);
    form.append("stok", this.state.stok);
    form.append("deskripsi", this.state.deskripsi);
    form.append("image", document.getElementById('file').files[0]);

    //mengirim data ke api utk disimpan pd database
    axios.post(url, form)
    .then(response => {
        //jika proses berhasil, memanggil data yg terbaru
        this.get_barang();
    })
    .catch(error => {
        console.log(error);
    });
    //menutup form modal
    $("#modal").modal('hide');
}

render() {
    return (
        <div className="container">
            <div className="card mt-2">
                <div className="card-header bg-warning">
                    <div className="row">
                        <div className="col-sm-8">
                            <h4 className="text-white">Data Barang</h4>
                        </div>
                    </div>
                </div>
                <div className="card-body bg-tranparent">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nama Barang</th>
                                <th>Harga</th>
                                <th>Stok</th>
                                <th>Deskripsi</th>
                                <th>Image</th>
                                <th>Option</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.state.barang.map((item) => {
                                return(
                                    <tr key={item.kode_barang}>
                                        <td>{item.nama_barang}</td>
                                        <td>{item.harga}</td>
                                        <td>{item.stok}</td>
                                        <td>{item.deskripsi}</td>
                                        <td>
                                            <img src={'http://localhost:8000/image/' + item.image}
                                            className="img" alt="gambar" width="200px" height="200px" />
                                        </td>
                                        <td>
                                            <button className="m-1 btn btn-sm btn-outline-warning" onClick={() => this.Edit(item)}>
                                                <span className="fa fa-edit"></span>
                                            </button>
                                            <button className="m-1 btn btn-sm btn-danger" onClick={() => this.Drop(item.kode_barang)}>
                                                <span className="fa fa-trash"></span>
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>

                    {/* tombol tambah */}
                    <button className="m-3 btn btn-sm btn-outline-success" onClick={this.Add}>
                        <span className="fa fa-plus"></span> Tambah Data
                    </button>

                    {/* form modal barang*/}
                    <Modal id="modal_barang" title="Form Barang" bg-header="warning" text_header="dark">
                        <form onSubmit={this.Save}>
                        Nama Barang
                        <input type="text" className="form-control" name="nama_barang" value={this.state.nama_barang} onChange={this.bind} required />
                        Harga
                        <input type="text" className="form-control" name="harga" value={this.state.harga} onChange={this.bind} required />
                        Stok
                        <input type="text" className="form-control" name="stok" value={this.state.stok} onChange={this.bind} required />
                        Deskripsi
                        <input type="text" className="form-control" name="deskripsi" value={this.state.deskripsi} onChange={this.bind} required />
                        Image
                        <input type="file" id="file" className="form-control" name="image" onChange={this.bind} required /> 
                            <button className="btn btn-sm btn-success" type="submit">  
                              Simpan  
                            </button>  
                          </form>
                    </Modal>
                </div>
            </div>
        </div> 
    );
}
}  
export default Barang;
