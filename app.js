// latihan
const crud = new Vue({
    el: '#crud',
    data: {
        isi: '',
        edat: '',
        items: ['pasir', 'batu', 'cat']
    },
    methods: {
        tambah(){
            this.items.push(this.isi);
            this.isi = ''
        },
        hapus(e){
            this.items.splice(e,1);
        },
        edit(e){
            this.edat = prompt();
            this.items.splice(e,1, this.edat);
        },
    }
})