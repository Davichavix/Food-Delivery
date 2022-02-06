$(document).ready(() => {

  loadOrders();

});

  //helper funtions
  const creatOrder = (orderData) => {
    const html = `
      <tbody>
        <tr  class="row">
          <td>
            ${orderData.order_number}
          </td>
          <td>
            ${orderData.user_name}
          </td>
          <td>
            ${orderData.created_at}
          </td>
          <td>
            ${orderData.status}
          </td>
          <td>
            <a href="/admin/${orderData.id}/confirm"><button type="button" class="btn-trans details-button ">Details</button></a>
          </td>
        </tr>
      </tbody>
    `
    return html;
  }

  const renderOrders = (orders) => {
    const all = orders['res'];

    if(all.length===0){
      const container = $('main');
      container.append(`<p>You have no orders. View our <a href='/'>Menu</a> & get a bubble tea!</p>`);
    }

    for (const order of all) {
      const newOrder = creatOrder(order);
      const container = $('.orders-content');
      container.prepend(newOrder);
    }

  }

  const loadOrders = () => {
    const path =window.location.pathname;
    const user_id = path.split('/')[2];

    $.get(`/api/admin/open`).then((res) => {
      renderOrders({res});
    });
  }
