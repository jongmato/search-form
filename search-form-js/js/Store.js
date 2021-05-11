const tag = "[store]";

export default class Store {
    constructor(storage) {
        console.log(tag, "store");
        if (!storage) throw "no storage";

        this.storage = storage;

        //검색결과
        this.searchKeyword = "";
        this.searchResult = [];
    }

    //searchKeyword에 해당하는 상품 검색 메서드
    search(keyword) {
        this.searchKeyword = keyword;
        this.searchResult = this.storage.productData.filter((product) =>
            product.name.includes(keyword)
        );
    }
}
