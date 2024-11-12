import { useState } from 'react'
import { products as initialProducts } from '../data/mockData'

function Products() {
  const [products, setProducts] = useState(initialProducts)
  const [showModal, setShowModal] = useState(false)
  const [editProduct, setEditProduct] = useState(null)
  const [form, setForm] = useState({ name: '', category: '', price: '', stock: '' })

  const openAdd = () => {
    setEditProduct(null)
    setForm({ name: '', category: '', price: '', stock: '' })
    setShowModal(true)
  }

  const openEdit = (product) => {
    setEditProduct(product)
    setForm({ name: product.name, category: product.category, price: String(product.price), stock: String(product.stock) })
    setShowModal(true)
  }

  const handleSave = () => {
    if (!form.name.trim()) return
    if (editProduct) {
      setProducts(prev => prev.map(p =>
        p.id === editProduct.id
          ? { ...p, name: form.name, category: form.category, price: parseFloat(form.price) || 0, stock: parseInt(form.stock) || 0 }
          : p
      ))
    } else {
      const newProduct = {
        id: Date.now(),
        name: form.name,
        category: form.category || 'Electronics',
        price: parseFloat(form.price) || 0,
        stock: parseInt(form.stock) || 0,
        rating: 4.0,
        sales: 0,
        image: `https://api.dicebear.com/7.x/shapes/svg?seed=${form.name}`,
      }
      setProducts(prev => [...prev, newProduct])
    }
    setShowModal(false)
  }

  const handleDelete = (id) => {
    setProducts(prev => prev.filter(p => p.id !== id))
  }

  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">Products</h1>
        <button className="btn-primary" onClick={openAdd}>+ Add Product</button>
      </div>

      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <span className="product-category">{product.category}</span>
              <div className="product-stats">
                <span className="product-price">${product.price.toFixed(2)}</span>
                <span className="product-stock">
                  {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                </span>
              </div>
              <div className="product-bottom">
                <span className="product-rating">⭐ {product.rating}</span>
                <span className="product-sales">{product.sales} sold</span>
              </div>
              <div className="product-actions">
                <button className="btn-sm btn-edit" onClick={() => openEdit(product)}>Edit</button>
                <button className="btn-sm btn-danger" onClick={() => handleDelete(product.id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{editProduct ? 'Edit Product' : 'Add Product'}</h2>
              <button className="modal-close" onClick={() => setShowModal(false)}>✕</button>
            </div>
            <div className="modal-body">
              <label className="form-label">
                Name
                <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="form-input" />
              </label>
              <label className="form-label">
                Category
                <input value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="form-input" />
              </label>
              <div className="form-row">
                <label className="form-label">
                  Price
                  <input type="number" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} className="form-input" />
                </label>
                <label className="form-label">
                  Stock
                  <input type="number" value={form.stock} onChange={(e) => setForm({ ...form, stock: e.target.value })} className="form-input" />
                </label>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn-cancel" onClick={() => setShowModal(false)}>Cancel</button>
              <button className="btn-primary" onClick={handleSave}>Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Products
